# `dataOciBdsBdsInstances` Submodule <a name="`dataOciBdsBdsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstances <a name="DataOciBdsBdsInstances" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances oci_bds_bds_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstances(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#compartment_id DataOciBdsBdsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#display_name DataOciBdsBdsInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#id DataOciBdsBdsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#state DataOciBdsBdsInstances#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#compartment_id DataOciBdsBdsInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#display_name DataOciBdsBdsInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#filter DataOciBdsBdsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#id DataOciBdsBdsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#state DataOciBdsBdsInstances#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsBdsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsBdsInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsBdsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.bdsInstances">bds_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList">DataOciBdsBdsInstancesBdsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList">DataOciBdsBdsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bds_instances`<sup>Required</sup> <a name="bds_instances" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.bdsInstances"></a>

```python
bds_instances: DataOciBdsBdsInstancesBdsInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList">DataOciBdsBdsInstancesBdsInstancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filter"></a>

```python
filter: DataOciBdsBdsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList">DataOciBdsBdsInstancesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstancesBdsInstances <a name="DataOciBdsBdsInstancesBdsInstances" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances()
```


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails()
```


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails()
```


### DataOciBdsBdsInstancesBdsInstancesClusterDetails <a name="DataOciBdsBdsInstancesBdsInstancesClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails()
```


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode()
```


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig()
```


### DataOciBdsBdsInstancesBdsInstancesEdgeNode <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode()
```


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig()
```


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode()
```


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig()
```


### DataOciBdsBdsInstancesBdsInstancesMasterNode <a name="DataOciBdsBdsInstancesBdsInstancesMasterNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode()
```


### DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig()
```


### DataOciBdsBdsInstancesBdsInstancesNetworkConfig <a name="DataOciBdsBdsInstancesBdsInstancesNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig()
```


### DataOciBdsBdsInstancesBdsInstancesNodes <a name="DataOciBdsBdsInstancesBdsInstancesNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes()
```


### DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes <a name="DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes()
```


### DataOciBdsBdsInstancesBdsInstancesUtilNode <a name="DataOciBdsBdsInstancesBdsInstancesUtilNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode()
```


### DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig()
```


### DataOciBdsBdsInstancesBdsInstancesWorkerNode <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode()
```


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig()
```


### DataOciBdsBdsInstancesConfig <a name="DataOciBdsBdsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#compartment_id DataOciBdsBdsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#display_name DataOciBdsBdsInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#id DataOciBdsBdsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#state DataOciBdsBdsInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#compartment_id DataOciBdsBdsInstances#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#display_name DataOciBdsBdsInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#filter DataOciBdsBdsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#id DataOciBdsBdsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#state DataOciBdsBdsInstances#state}.

---

### DataOciBdsBdsInstancesFilter <a name="DataOciBdsBdsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#name DataOciBdsBdsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#values DataOciBdsBdsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#regex DataOciBdsBdsInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#name DataOciBdsBdsInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#values DataOciBdsBdsInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#regex DataOciBdsBdsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile">keytab_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keytab_file`<sup>Required</sup> <a name="keytab_file" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile"></a>

```python
keytab_file: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails</a>

---


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers">is_kerberos_mapped_to_database_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.kerberosDetails">kerberos_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_kerberos_mapped_to_database_users`<sup>Required</sup> <a name="is_kerberos_mapped_to_database_users" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers"></a>

```python
is_kerberos_mapped_to_database_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kerberos_details`<sup>Required</sup> <a name="kerberos_details" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.kerberosDetails"></a>

```python
kerberos_details: DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList</a>

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails</a>

---


### DataOciBdsBdsInstancesBdsInstancesClusterDetailsList <a name="DataOciBdsBdsInstancesBdsInstancesClusterDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.ambariUrl">ambari_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdaVersion">bda_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdCellVersion">bd_cell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdmVersion">bdm_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdsVersion">bds_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bigDataManagerUrl">big_data_manager_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.clouderaManagerUrl">cloudera_manager_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.csqlCellVersion">csql_cell_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.hueServerUrl">hue_server_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.jupyterHubUrl">jupyter_hub_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.odhVersion">odh_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeRefreshed">time_refreshed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails">DataOciBdsBdsInstancesBdsInstancesClusterDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambari_url`<sup>Required</sup> <a name="ambari_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.ambariUrl"></a>

```python
ambari_url: str
```

- *Type:* str

---

##### `bda_version`<sup>Required</sup> <a name="bda_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdaVersion"></a>

```python
bda_version: str
```

- *Type:* str

---

##### `bd_cell_version`<sup>Required</sup> <a name="bd_cell_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdCellVersion"></a>

```python
bd_cell_version: str
```

- *Type:* str

---

##### `bdm_version`<sup>Required</sup> <a name="bdm_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdmVersion"></a>

```python
bdm_version: str
```

- *Type:* str

---

##### `bds_version`<sup>Required</sup> <a name="bds_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdsVersion"></a>

```python
bds_version: str
```

- *Type:* str

---

##### `big_data_manager_url`<sup>Required</sup> <a name="big_data_manager_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bigDataManagerUrl"></a>

```python
big_data_manager_url: str
```

- *Type:* str

---

##### `cloudera_manager_url`<sup>Required</sup> <a name="cloudera_manager_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.clouderaManagerUrl"></a>

```python
cloudera_manager_url: str
```

- *Type:* str

---

##### `csql_cell_version`<sup>Required</sup> <a name="csql_cell_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.csqlCellVersion"></a>

```python
csql_cell_version: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `hue_server_url`<sup>Required</sup> <a name="hue_server_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.hueServerUrl"></a>

```python
hue_server_url: str
```

- *Type:* str

---

##### `jupyter_hub_url`<sup>Required</sup> <a name="jupyter_hub_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.jupyterHubUrl"></a>

```python
jupyter_hub_url: str
```

- *Type:* str

---

##### `odh_version`<sup>Required</sup> <a name="odh_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.odhVersion"></a>

```python
odh_version: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_refreshed`<sup>Required</sup> <a name="time_refreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeRefreshed"></a>

```python
time_refreshed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesClusterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails">DataOciBdsBdsInstancesBdsInstancesClusterDetails</a>

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeList <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode">DataOciBdsBdsInstancesBdsInstancesEdgeNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesEdgeNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode">DataOciBdsBdsInstancesBdsInstancesEdgeNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes">number_of_kafka_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_kafka_nodes`<sup>Required</sup> <a name="number_of_kafka_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes"></a>

```python
number_of_kafka_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesList <a name="DataOciBdsBdsInstancesBdsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeList <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode">DataOciBdsBdsInstancesBdsInstancesMasterNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesMasterNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode">DataOciBdsBdsInstancesBdsInstancesMasterNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesNetworkConfigList <a name="DataOciBdsBdsInstancesBdsInstancesNetworkConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.isNatGatewayRequired">is_nat_gateway_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig">DataOciBdsBdsInstancesBdsInstancesNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `is_nat_gateway_required`<sup>Required</sup> <a name="is_nat_gateway_required" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.isNatGatewayRequired"></a>

```python
is_nat_gateway_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig">DataOciBdsBdsInstancesBdsInstancesNetworkConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList <a name="DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId">volume_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs">volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_attachment_id`<sup>Required</sup> <a name="volume_attachment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId"></a>

```python
volume_attachment_id: str
```

- *Type:* str

---

##### `volume_size_in_gbs`<sup>Required</sup> <a name="volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs"></a>

```python
volume_size_in_gbs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes</a>

---


### DataOciBdsBdsInstancesBdsInstancesNodesList <a name="DataOciBdsBdsInstancesBdsInstancesNodesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesNodesOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.attachedBlockVolumes">attached_block_volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.isRebootRequired">is_reboot_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.localDisksTotalSizeInGbs">local_disks_total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.sshFingerprint">ssh_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeMaintenanceRebootDue">time_maintenance_reboot_due</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes">DataOciBdsBdsInstancesBdsInstancesNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_block_volumes`<sup>Required</sup> <a name="attached_block_volumes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.attachedBlockVolumes"></a>

```python
attached_block_volumes: DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_reboot_required`<sup>Required</sup> <a name="is_reboot_required" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.isRebootRequired"></a>

```python
is_reboot_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `local_disks_total_size_in_gbs`<sup>Required</sup> <a name="local_disks_total_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.localDisksTotalSizeInGbs"></a>

```python
local_disks_total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_fingerprint`<sup>Required</sup> <a name="ssh_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.sshFingerprint"></a>

```python
ssh_fingerprint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_maintenance_reboot_due`<sup>Required</sup> <a name="time_maintenance_reboot_due" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeMaintenanceRebootDue"></a>

```python
time_maintenance_reboot_due: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes">DataOciBdsBdsInstancesBdsInstancesNodes</a>

---


### DataOciBdsBdsInstancesBdsInstancesOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.bootstrapScriptUrl">bootstrap_script_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.cloudSqlDetails">cloud_sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterDetails">cluster_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList">DataOciBdsBdsInstancesBdsInstancesClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterProfile">cluster_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterPublicKey">cluster_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterVersion">cluster_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.computeOnlyWorkerNode">compute_only_worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.edgeNode">edge_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.ignoreExistingNodesShape">ignore_existing_nodes_shape</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isCloudSqlConfigured">is_cloud_sql_configured</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isForceStopJobs">is_force_stop_jobs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isHighAvailability">is_high_availability</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isKafkaConfigured">is_kafka_configured</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kafkaBrokerNode">kafka_broker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kerberosRealmName">kerberos_realm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.masterNode">master_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList">DataOciBdsBdsInstancesBdsInstancesMasterNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.networkConfig">network_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList">DataOciBdsBdsInstancesBdsInstancesNetworkConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList">DataOciBdsBdsInstancesBdsInstancesNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodesRequiringMaintenanceReboot">number_of_nodes_requiring_maintenance_reboot</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.utilNode">util_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList">DataOciBdsBdsInstancesBdsInstancesUtilNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.workerNode">worker_node</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances">DataOciBdsBdsInstancesBdsInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bootstrap_script_url`<sup>Required</sup> <a name="bootstrap_script_url" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.bootstrapScriptUrl"></a>

```python
bootstrap_script_url: str
```

- *Type:* str

---

##### `cloud_sql_details`<sup>Required</sup> <a name="cloud_sql_details" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.cloudSqlDetails"></a>

```python
cloud_sql_details: DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList</a>

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `cluster_details`<sup>Required</sup> <a name="cluster_details" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterDetails"></a>

```python
cluster_details: DataOciBdsBdsInstancesBdsInstancesClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList">DataOciBdsBdsInstancesBdsInstancesClusterDetailsList</a>

---

##### `cluster_profile`<sup>Required</sup> <a name="cluster_profile" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterProfile"></a>

```python
cluster_profile: str
```

- *Type:* str

---

##### `cluster_public_key`<sup>Required</sup> <a name="cluster_public_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterPublicKey"></a>

```python
cluster_public_key: str
```

- *Type:* str

---

##### `cluster_version`<sup>Required</sup> <a name="cluster_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterVersion"></a>

```python
cluster_version: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_only_worker_node`<sup>Required</sup> <a name="compute_only_worker_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.computeOnlyWorkerNode"></a>

```python
compute_only_worker_node: DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `edge_node`<sup>Required</sup> <a name="edge_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.edgeNode"></a>

```python
edge_node: DataOciBdsBdsInstancesBdsInstancesEdgeNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_existing_nodes_shape`<sup>Required</sup> <a name="ignore_existing_nodes_shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.ignoreExistingNodesShape"></a>

```python
ignore_existing_nodes_shape: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_cloud_sql_configured`<sup>Required</sup> <a name="is_cloud_sql_configured" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isCloudSqlConfigured"></a>

```python
is_cloud_sql_configured: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_force_stop_jobs`<sup>Required</sup> <a name="is_force_stop_jobs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isForceStopJobs"></a>

```python
is_force_stop_jobs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_high_availability`<sup>Required</sup> <a name="is_high_availability" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isHighAvailability"></a>

```python
is_high_availability: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_kafka_configured`<sup>Required</sup> <a name="is_kafka_configured" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isKafkaConfigured"></a>

```python
is_kafka_configured: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kafka_broker_node`<sup>Required</sup> <a name="kafka_broker_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kafkaBrokerNode"></a>

```python
kafka_broker_node: DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList</a>

---

##### `kerberos_realm_name`<sup>Required</sup> <a name="kerberos_realm_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kerberosRealmName"></a>

```python
kerberos_realm_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `master_node`<sup>Required</sup> <a name="master_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.masterNode"></a>

```python
master_node: DataOciBdsBdsInstancesBdsInstancesMasterNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList">DataOciBdsBdsInstancesBdsInstancesMasterNodeList</a>

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.networkConfig"></a>

```python
network_config: DataOciBdsBdsInstancesBdsInstancesNetworkConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList">DataOciBdsBdsInstancesBdsInstancesNetworkConfigList</a>

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.nodes"></a>

```python
nodes: DataOciBdsBdsInstancesBdsInstancesNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList">DataOciBdsBdsInstancesBdsInstancesNodesList</a>

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_nodes_requiring_maintenance_reboot`<sup>Required</sup> <a name="number_of_nodes_requiring_maintenance_reboot" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodesRequiringMaintenanceReboot"></a>

```python
number_of_nodes_requiring_maintenance_reboot: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `util_node`<sup>Required</sup> <a name="util_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.utilNode"></a>

```python
util_node: DataOciBdsBdsInstancesBdsInstancesUtilNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList">DataOciBdsBdsInstancesBdsInstancesUtilNodeList</a>

---

##### `worker_node`<sup>Required</sup> <a name="worker_node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.workerNode"></a>

```python
worker_node: DataOciBdsBdsInstancesBdsInstancesWorkerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances">DataOciBdsBdsInstancesBdsInstances</a>

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeList <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode">DataOciBdsBdsInstancesBdsInstancesUtilNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesUtilNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode">DataOciBdsBdsInstancesBdsInstancesUtilNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeList <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.blockVolumeSizeInGbs">block_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode">DataOciBdsBdsInstancesBdsInstancesWorkerNode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_size_in_gbs`<sup>Required</sup> <a name="block_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```python
block_volume_size_in_gbs: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode">DataOciBdsBdsInstancesBdsInstancesWorkerNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.nvmes">nvmes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nvmes`<sup>Required</sup> <a name="nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```python
nvmes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesFilterList <a name="DataOciBdsBdsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]]

---


### DataOciBdsBdsInstancesFilterOutputReference <a name="DataOciBdsBdsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instances

dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBdsBdsInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter">DataOciBdsBdsInstancesFilter</a>]

---



