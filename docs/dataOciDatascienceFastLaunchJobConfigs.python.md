# `dataOciDatascienceFastLaunchJobConfigs` Submodule <a name="`dataOciDatascienceFastLaunchJobConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceFastLaunchJobConfigs <a name="DataOciDatascienceFastLaunchJobConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs oci_datascience_fast_launch_job_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceFastLaunchJobConfigsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#compartment_id DataOciDatascienceFastLaunchJobConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#id DataOciDatascienceFastLaunchJobConfigs#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#compartment_id DataOciDatascienceFastLaunchJobConfigs#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#filter DataOciDatascienceFastLaunchJobConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#id DataOciDatascienceFastLaunchJobConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatascienceFastLaunchJobConfigsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatascienceFastLaunchJobConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatascienceFastLaunchJobConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatascienceFastLaunchJobConfigs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatascienceFastLaunchJobConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceFastLaunchJobConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.fastLaunchJobConfigs">fast_launch_job_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList">DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList">DataOciDatascienceFastLaunchJobConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `fast_launch_job_configs`<sup>Required</sup> <a name="fast_launch_job_configs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.fastLaunchJobConfigs"></a>

```python
fast_launch_job_configs: DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList">DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.filter"></a>

```python
filter: DataOciDatascienceFastLaunchJobConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList">DataOciDatascienceFastLaunchJobConfigsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatascienceFastLaunchJobConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceFastLaunchJobConfigsConfig <a name="DataOciDatascienceFastLaunchJobConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceFastLaunchJobConfigsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#compartment_id DataOciDatascienceFastLaunchJobConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#id DataOciDatascienceFastLaunchJobConfigs#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#compartment_id DataOciDatascienceFastLaunchJobConfigs#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatascienceFastLaunchJobConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#filter DataOciDatascienceFastLaunchJobConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#id DataOciDatascienceFastLaunchJobConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs <a name="DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs()
```


### DataOciDatascienceFastLaunchJobConfigsFilter <a name="DataOciDatascienceFastLaunchJobConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#name DataOciDatascienceFastLaunchJobConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#values DataOciDatascienceFastLaunchJobConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#regex DataOciDatascienceFastLaunchJobConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#name DataOciDatascienceFastLaunchJobConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#values DataOciDatascienceFastLaunchJobConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_fast_launch_job_configs#regex DataOciDatascienceFastLaunchJobConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList <a name="DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference <a name="DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.managedEgressSupport">managed_egress_support</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.shapeSeries">shape_series</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs">DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_egress_support`<sup>Required</sup> <a name="managed_egress_support" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.managedEgressSupport"></a>

```python
managed_egress_support: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `shape_series`<sup>Required</sup> <a name="shape_series" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.shapeSeries"></a>

```python
shape_series: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs">DataOciDatascienceFastLaunchJobConfigsFastLaunchJobConfigs</a>

---


### DataOciDatascienceFastLaunchJobConfigsFilterList <a name="DataOciDatascienceFastLaunchJobConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceFastLaunchJobConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatascienceFastLaunchJobConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]]

---


### DataOciDatascienceFastLaunchJobConfigsFilterOutputReference <a name="DataOciDatascienceFastLaunchJobConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_fast_launch_job_configs

dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatascienceFastLaunchJobConfigsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceFastLaunchJobConfigs.DataOciDatascienceFastLaunchJobConfigsFilter">DataOciDatascienceFastLaunchJobConfigsFilter</a>]

---



