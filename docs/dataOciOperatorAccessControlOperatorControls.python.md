# `dataOciOperatorAccessControlOperatorControls` Submodule <a name="`dataOciOperatorAccessControlOperatorControls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControls <a name="DataOciOperatorAccessControlOperatorControls" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls oci_operator_access_control_operator_controls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlsFilter]] = None,
  id: str = None,
  resource_type: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#compartment_id DataOciOperatorAccessControlOperatorControls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#display_name DataOciOperatorAccessControlOperatorControls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#id DataOciOperatorAccessControlOperatorControls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#resource_type DataOciOperatorAccessControlOperatorControls#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#state DataOciOperatorAccessControlOperatorControls#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#compartment_id DataOciOperatorAccessControlOperatorControls#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#display_name DataOciOperatorAccessControlOperatorControls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#filter DataOciOperatorAccessControlOperatorControls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#id DataOciOperatorAccessControlOperatorControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#resource_type DataOciOperatorAccessControlOperatorControls#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#state DataOciOperatorAccessControlOperatorControls#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControls resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControls to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOperatorAccessControlOperatorControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList">DataOciOperatorAccessControlOperatorControlsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.operatorControlCollection">operator_control_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList">DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.filter"></a>

```python
filter: DataOciOperatorAccessControlOperatorControlsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList">DataOciOperatorAccessControlOperatorControlsFilterList</a>

---

##### `operator_control_collection`<sup>Required</sup> <a name="operator_control_collection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.operatorControlCollection"></a>

```python
operator_control_collection: DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList">DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlsConfig <a name="DataOciOperatorAccessControlOperatorControlsConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlsFilter]] = None,
  id: str = None,
  resource_type: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#compartment_id DataOciOperatorAccessControlOperatorControls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#display_name DataOciOperatorAccessControlOperatorControls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#id DataOciOperatorAccessControlOperatorControls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#resource_type DataOciOperatorAccessControlOperatorControls#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#state DataOciOperatorAccessControlOperatorControls#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#compartment_id DataOciOperatorAccessControlOperatorControls#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#display_name DataOciOperatorAccessControlOperatorControls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#filter DataOciOperatorAccessControlOperatorControls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#id DataOciOperatorAccessControlOperatorControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#resource_type DataOciOperatorAccessControlOperatorControls#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#state DataOciOperatorAccessControlOperatorControls#state}.

---

### DataOciOperatorAccessControlOperatorControlsFilter <a name="DataOciOperatorAccessControlOperatorControlsFilter" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#name DataOciOperatorAccessControlOperatorControls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#values DataOciOperatorAccessControlOperatorControls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#regex DataOciOperatorAccessControlOperatorControls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#name DataOciOperatorAccessControlOperatorControls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#values DataOciOperatorAccessControlOperatorControls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_controls#regex DataOciOperatorAccessControlOperatorControls#regex}.

---

### DataOciOperatorAccessControlOperatorControlsOperatorControlCollection <a name="DataOciOperatorAccessControlOperatorControlsOperatorControlCollection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollection()
```


### DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems <a name="DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlOperatorControlsFilterList <a name="DataOciOperatorAccessControlOperatorControlsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlOperatorControlsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOperatorAccessControlOperatorControlsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]]

---


### DataOciOperatorAccessControlOperatorControlsFilterOutputReference <a name="DataOciOperatorAccessControlOperatorControlsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOperatorAccessControlOperatorControlsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsFilter">DataOciOperatorAccessControlOperatorControlsFilter</a>]

---


### DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList <a name="DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference <a name="DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.approvalRequiredOpActionList">approval_required_op_action_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.approverGroupsList">approver_groups_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.approversList">approvers_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.emailIdList">email_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.isDefaultOperatorControl">is_default_operator_control</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.isFullyPreApproved">is_fully_pre_approved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.lastModifiedInfo">last_modified_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.numberOfApprovers">number_of_approvers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.operatorControlName">operator_control_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.preApprovedOpActionList">pre_approved_op_action_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.systemMessage">system_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.timeOfCreation">time_of_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.timeOfModification">time_of_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems">DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_required_op_action_list`<sup>Required</sup> <a name="approval_required_op_action_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.approvalRequiredOpActionList"></a>

```python
approval_required_op_action_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approver_groups_list`<sup>Required</sup> <a name="approver_groups_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.approverGroupsList"></a>

```python
approver_groups_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approvers_list`<sup>Required</sup> <a name="approvers_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.approversList"></a>

```python
approvers_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `email_id_list`<sup>Required</sup> <a name="email_id_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.emailIdList"></a>

```python
email_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default_operator_control`<sup>Required</sup> <a name="is_default_operator_control" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.isDefaultOperatorControl"></a>

```python
is_default_operator_control: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_fully_pre_approved`<sup>Required</sup> <a name="is_fully_pre_approved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.isFullyPreApproved"></a>

```python
is_fully_pre_approved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified_info`<sup>Required</sup> <a name="last_modified_info" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.lastModifiedInfo"></a>

```python
last_modified_info: str
```

- *Type:* str

---

##### `number_of_approvers`<sup>Required</sup> <a name="number_of_approvers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.numberOfApprovers"></a>

```python
number_of_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `operator_control_name`<sup>Required</sup> <a name="operator_control_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.operatorControlName"></a>

```python
operator_control_name: str
```

- *Type:* str

---

##### `pre_approved_op_action_list`<sup>Required</sup> <a name="pre_approved_op_action_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.preApprovedOpActionList"></a>

```python
pre_approved_op_action_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_message`<sup>Required</sup> <a name="system_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.systemMessage"></a>

```python
system_message: str
```

- *Type:* str

---

##### `time_of_creation`<sup>Required</sup> <a name="time_of_creation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.timeOfCreation"></a>

```python
time_of_creation: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `time_of_modification`<sup>Required</sup> <a name="time_of_modification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.timeOfModification"></a>

```python
time_of_modification: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems">DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItems</a>

---


### DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList <a name="DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference <a name="DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_operator_controls

dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList">DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollection">DataOciOperatorAccessControlOperatorControlsOperatorControlCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.items"></a>

```python
items: DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList">DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlOperatorControlsOperatorControlCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControls.DataOciOperatorAccessControlOperatorControlsOperatorControlCollection">DataOciOperatorAccessControlOperatorControlsOperatorControlCollection</a>

---



