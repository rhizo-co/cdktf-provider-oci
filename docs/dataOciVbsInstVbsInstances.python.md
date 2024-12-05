# `dataOciVbsInstVbsInstances` Submodule <a name="`dataOciVbsInstVbsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVbsInstVbsInstances <a name="DataOciVbsInstVbsInstances" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances oci_vbs_inst_vbs_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances(
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
  filter: typing.Union[IResolvable, typing.List[DataOciVbsInstVbsInstancesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#compartment_id DataOciVbsInstVbsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#id DataOciVbsInstVbsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#state DataOciVbsInstVbsInstances#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#compartment_id DataOciVbsInstVbsInstances#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#filter DataOciVbsInstVbsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#id DataOciVbsInstVbsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#state DataOciVbsInstVbsInstances#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciVbsInstVbsInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciVbsInstVbsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciVbsInstVbsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciVbsInstVbsInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciVbsInstVbsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVbsInstVbsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList">DataOciVbsInstVbsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.vbsInstanceSummaryCollection">vbs_instance_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filter"></a>

```python
filter: DataOciVbsInstVbsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList">DataOciVbsInstVbsInstancesFilterList</a>

---

##### `vbs_instance_summary_collection`<sup>Required</sup> <a name="vbs_instance_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.vbsInstanceSummaryCollection"></a>

```python
vbs_instance_summary_collection: DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciVbsInstVbsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVbsInstVbsInstancesConfig <a name="DataOciVbsInstVbsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciVbsInstVbsInstancesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#compartment_id DataOciVbsInstVbsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#id DataOciVbsInstVbsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#state DataOciVbsInstVbsInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#compartment_id DataOciVbsInstVbsInstances#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciVbsInstVbsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#filter DataOciVbsInstVbsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#id DataOciVbsInstVbsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#state DataOciVbsInstVbsInstances#state}.

---

### DataOciVbsInstVbsInstancesFilter <a name="DataOciVbsInstVbsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#values DataOciVbsInstVbsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#regex DataOciVbsInstVbsInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#name DataOciVbsInstVbsInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#values DataOciVbsInstVbsInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/vbs_inst_vbs_instances#regex DataOciVbsInstVbsInstances#regex}.

---

### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection()
```


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVbsInstVbsInstancesFilterList <a name="DataOciVbsInstVbsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVbsInstVbsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciVbsInstVbsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]]

---


### DataOciVbsInstVbsInstancesFilterOutputReference <a name="DataOciVbsInstVbsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciVbsInstVbsInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesFilter">DataOciVbsInstVbsInstancesFilter</a>]

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.isResourceUsageAgreementGranted">is_resource_usage_agreement_granted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.lifecyleDetails">lifecyle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.vbsAccessUrl">vbs_access_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `is_resource_usage_agreement_granted`<sup>Required</sup> <a name="is_resource_usage_agreement_granted" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.isResourceUsageAgreementGranted"></a>

```python
is_resource_usage_agreement_granted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecyle_details`<sup>Required</sup> <a name="lifecyle_details" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.lifecyleDetails"></a>

```python
lifecyle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.resourceCompartmentId"></a>

```python
resource_compartment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vbs_access_url`<sup>Required</sup> <a name="vbs_access_url" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.vbsAccessUrl"></a>

```python
vbs_access_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItems</a>

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference <a name="DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_vbs_inst_vbs_instances

dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVbsInstVbsInstances.DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection">DataOciVbsInstVbsInstancesVbsInstanceSummaryCollection</a>

---



