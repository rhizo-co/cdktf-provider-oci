# `dataOciDevopsDeployEnvironments` Submodule <a name="`dataOciDevopsDeployEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsDeployEnvironments <a name="DataOciDevopsDeployEnvironments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments oci_devops_deploy_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployEnvironmentsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#filter DataOciDevopsDeployEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDevopsDeployEnvironmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsDeployEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsDeployEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsDeployEnvironments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsDeployEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsDeployEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.deployEnvironmentCollection">deploy_environment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList">DataOciDevopsDeployEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deploy_environment_collection`<sup>Required</sup> <a name="deploy_environment_collection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.deployEnvironmentCollection"></a>

```python
deploy_environment_collection: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filter"></a>

```python
filter: DataOciDevopsDeployEnvironmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList">DataOciDevopsDeployEnvironmentsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDevopsDeployEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsDeployEnvironmentsConfig <a name="DataOciDevopsDeployEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployEnvironmentsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#compartment_id DataOciDevopsDeployEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#display_name DataOciDevopsDeployEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDevopsDeployEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#filter DataOciDevopsDeployEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#id DataOciDevopsDeployEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#project_id DataOciDevopsDeployEnvironments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#state DataOciDevopsDeployEnvironments#state}.

---

### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection()
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems()
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors()
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems()
```


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel()
```


### DataOciDevopsDeployEnvironmentsFilter <a name="DataOciDevopsDeployEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#name DataOciDevopsDeployEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#values DataOciDevopsDeployEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#regex DataOciDevopsDeployEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#name DataOciDevopsDeployEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#values DataOciDevopsDeployEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_deploy_environments#regex DataOciDevopsDeployEnvironments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds">compute_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType">selector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_instance_ids`<sup>Required</sup> <a name="compute_instance_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.computeInstanceIds"></a>

```python
compute_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `selector_type`<sup>Required</sup> <a name="selector_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.selectorType"></a>

```python
selector_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItems</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectors</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.networkChannelType">network_channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_channel_type`<sup>Required</sup> <a name="network_channel_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.networkChannelType"></a>

```python
network_channel_type: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannel</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.computeInstanceGroupSelectors">compute_instance_group_selectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.deployEnvironmentType">deploy_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.networkChannel">network_channel</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_instance_group_selectors`<sup>Required</sup> <a name="compute_instance_group_selectors" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.computeInstanceGroupSelectors"></a>

```python
compute_instance_group_selectors: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsComputeInstanceGroupSelectorsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deploy_environment_type`<sup>Required</sup> <a name="deploy_environment_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.deployEnvironmentType"></a>

```python
deploy_environment_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `network_channel`<sup>Required</sup> <a name="network_channel" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.networkChannel"></a>

```python
network_channel: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsNetworkChannelList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItems</a>

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference <a name="DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.items"></a>

```python
items: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection">DataOciDevopsDeployEnvironmentsDeployEnvironmentCollection</a>

---


### DataOciDevopsDeployEnvironmentsFilterList <a name="DataOciDevopsDeployEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsDeployEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDevopsDeployEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]]

---


### DataOciDevopsDeployEnvironmentsFilterOutputReference <a name="DataOciDevopsDeployEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_deploy_environments

dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDevopsDeployEnvironmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsDeployEnvironments.DataOciDevopsDeployEnvironmentsFilter">DataOciDevopsDeployEnvironmentsFilter</a>]

---



