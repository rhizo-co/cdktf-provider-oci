# `dataOciAutoscalingAutoScalingConfigurations` Submodule <a name="`dataOciAutoscalingAutoScalingConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations oci_autoscaling_auto_scaling_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciAutoscalingAutoScalingConfigurationsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#filter DataOciAutoscalingAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAutoscalingAutoScalingConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAutoscalingAutoScalingConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations">auto_scaling_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `auto_scaling_configurations`<sup>Required</sup> <a name="auto_scaling_configurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.autoScalingConfigurations"></a>

```python
auto_scaling_configurations: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filter"></a>

```python
filter: DataOciAutoscalingAutoScalingConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList">DataOciAutoscalingAutoScalingConfigurationsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAutoscalingAutoScalingConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric()
```


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold()
```


### DataOciAutoscalingAutoScalingConfigurationsConfig <a name="DataOciAutoscalingAutoScalingConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAutoscalingAutoScalingConfigurationsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#compartment_id DataOciAutoscalingAutoScalingConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#display_name DataOciAutoscalingAutoScalingConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAutoscalingAutoScalingConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#filter DataOciAutoscalingAutoScalingConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#id DataOciAutoscalingAutoScalingConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciAutoscalingAutoScalingConfigurationsFilter <a name="DataOciAutoscalingAutoScalingConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#name DataOciAutoscalingAutoScalingConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#values DataOciAutoscalingAutoScalingConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configurations#regex DataOciAutoscalingAutoScalingConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources">auto_scaling_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds">cool_down_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount">max_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount">min_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_resources`<sup>Required</sup> <a name="auto_scaling_resources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.autoScalingResources"></a>

```python
auto_scaling_resources: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsAutoScalingResourcesList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cool_down_in_seconds`<sup>Required</sup> <a name="cool_down_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.coolDownInSeconds"></a>

```python
cool_down_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_resource_count`<sup>Required</sup> <a name="max_resource_count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.maxResourceCount"></a>

```python
max_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_resource_count`<sup>Required</sup> <a name="min_resource_count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.minResourceCount"></a>

```python
min_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.policies"></a>

```python
policies: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurations</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial">initial</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `initial`<sup>Required</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.initial"></a>

```python
initial: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule">execution_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction">resource_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.capacity"></a>

```python
capacity: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesCapacityList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `execution_schedule`<sup>Required</sup> <a name="execution_schedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.executionSchedule"></a>

```python
execution_schedule: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesExecutionScheduleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `resource_action`<sup>Required</sup> <a name="resource_action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.resourceAction"></a>

```python
resource_action: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.rules"></a>

```python
rules: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceActionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.threshold"></a>

```python
threshold: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.action"></a>

```python
action: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesActionList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.metric"></a>

```python
metric: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesMetricList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules">DataOciAutoscalingAutoScalingConfigurationsAutoScalingConfigurationsPoliciesRules</a>

---


### DataOciAutoscalingAutoScalingConfigurationsFilterList <a name="DataOciAutoscalingAutoScalingConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAutoscalingAutoScalingConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]]

---


### DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_autoscaling_auto_scaling_configurations

dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAutoscalingAutoScalingConfigurationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfigurations.DataOciAutoscalingAutoScalingConfigurationsFilter">DataOciAutoscalingAutoScalingConfigurationsFilter</a>]

---



