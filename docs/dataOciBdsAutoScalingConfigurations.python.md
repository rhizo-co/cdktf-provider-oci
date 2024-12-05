# `dataOciBdsAutoScalingConfigurations` Submodule <a name="`dataOciBdsAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsAutoScalingConfigurations <a name="DataOciBdsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations oci_bds_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsAutoScalingConfigurationsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#filter DataOciBdsAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBdsAutoScalingConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsAutoScalingConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.autoScalingConfigurations">auto_scaling_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList">DataOciBdsAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_scaling_configurations`<sup>Required</sup> <a name="auto_scaling_configurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```python
auto_scaling_configurations: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filter"></a>

```python
filter: DataOciBdsAutoScalingConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList">DataOciBdsAutoScalingConfigurationsFilterList</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBdsAutoScalingConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric()
```


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold()
```


### DataOciBdsAutoScalingConfigurationsConfig <a name="DataOciBdsAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsAutoScalingConfigurationsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#bds_instance_id DataOciBdsAutoScalingConfigurations#bds_instance_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#compartment_id DataOciBdsAutoScalingConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#display_name DataOciBdsAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBdsAutoScalingConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#filter DataOciBdsAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#id DataOciBdsAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#state DataOciBdsAutoScalingConfigurations#state}.

---

### DataOciBdsAutoScalingConfigurationsFilter <a name="DataOciBdsAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#name DataOciBdsAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#values DataOciBdsAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#regex DataOciBdsAutoScalingConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#name DataOciBdsAutoScalingConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#values DataOciBdsAutoScalingConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configurations#regex DataOciBdsAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policy">policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policyDetails">policy_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policy"></a>

```python
policy: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList</a>

---

##### `policy_details`<sup>Required</sup> <a name="policy_details" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policyDetails"></a>

```python
policy_details: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleDownConfig">scale_down_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleInConfig">scale_in_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleOutConfig">scale_out_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleUpConfig">scale_up_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scheduleDetails">schedule_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.triggerType">trigger_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `scale_down_config`<sup>Required</sup> <a name="scale_down_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```python
scale_down_config: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList</a>

---

##### `scale_in_config`<sup>Required</sup> <a name="scale_in_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleInConfig"></a>

```python
scale_in_config: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList</a>

---

##### `scale_out_config`<sup>Required</sup> <a name="scale_out_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```python
scale_out_config: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList</a>

---

##### `scale_up_config`<sup>Required</sup> <a name="scale_up_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```python
scale_up_config: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList</a>

---

##### `schedule_details`<sup>Required</sup> <a name="schedule_details" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.scheduleDetails"></a>

```python
schedule_details: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `trigger_type`<sup>Required</sup> <a name="trigger_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.triggerType"></a>

```python
trigger_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetails</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">min_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">min_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_step_size`<sup>Required</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigMetricList</a>

---

##### `min_memory_per_node`<sup>Required</sup> <a name="min_memory_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```python
min_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ocpus_per_node`<sup>Required</sup> <a name="min_ocpus_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```python
min_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_step_size`<sup>Required</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleDownConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigMetricList</a>

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_size`<sup>Required</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleInConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.stepSize">step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigMetricList</a>

---

##### `step_size`<sup>Required</sup> <a name="step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```python
step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleOutConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">max_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">max_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">memory_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">ocpu_step_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_per_node`<sup>Required</sup> <a name="max_memory_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```python
max_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ocpus_per_node`<sup>Required</sup> <a name="max_ocpus_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```python
max_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_step_size`<sup>Required</sup> <a name="memory_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```python
memory_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigMetricList</a>

---

##### `ocpu_step_size`<sup>Required</sup> <a name="ocpu_step_size" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```python
ocpu_step_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScaleUpConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">time_and_horizontal_scaling_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">time_and_vertical_scaling_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_type`<sup>Required</sup> <a name="schedule_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```python
schedule_type: str
```

- *Type:* str

---

##### `time_and_horizontal_scaling_config`<sup>Required</sup> <a name="time_and_horizontal_scaling_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```python
time_and_horizontal_scaling_config: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `time_and_vertical_scaling_config`<sup>Required</sup> <a name="time_and_vertical_scaling_config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```python
time_and_vertical_scaling_config: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetails</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">target_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_node_count`<sup>Required</sup> <a name="target_node_count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```python
target_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_recurrence`<sup>Required</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">target_memory_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">target_ocpus_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">target_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">time_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_memory_per_node`<sup>Required</sup> <a name="target_memory_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```python
target_memory_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_ocpus_per_node`<sup>Required</sup> <a name="target_ocpus_per_node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```python
target_ocpus_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_shape`<sup>Required</sup> <a name="target_shape" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```python
target_shape: str
```

- *Type:* str

---

##### `time_recurrence`<sup>Required</sup> <a name="time_recurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```python
time_recurrence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.rules"></a>

```python
rules: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicy</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetric</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">duration_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_minutes`<sup>Required</sup> <a name="duration_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```python
duration_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference <a name="DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.metric"></a>

```python
metric: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesMetricList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules">DataOciBdsAutoScalingConfigurationsAutoScalingConfigurationsPolicyRules</a>

---


### DataOciBdsAutoScalingConfigurationsFilterList <a name="DataOciBdsAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsAutoScalingConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBdsAutoScalingConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]]

---


### DataOciBdsAutoScalingConfigurationsFilterOutputReference <a name="DataOciBdsAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_auto_scaling_configurations

dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBdsAutoScalingConfigurationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfigurations.DataOciBdsAutoScalingConfigurationsFilter">DataOciBdsAutoScalingConfigurationsFilter</a>]

---



