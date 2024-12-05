# `dataOciOpsiOpsiConfigurations` Submodule <a name="`dataOciOpsiOpsiConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOpsiConfigurations <a name="DataOciOpsiOpsiConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations oci_opsi_opsi_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiOpsiConfigurationsFilter]] = None,
  id: str = None,
  opsi_config_type: typing.List[str] = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.opsiConfigType">opsi_config_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#filter DataOciOpsiOpsiConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsi_config_type`<sup>Optional</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.opsiConfigType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType">reset_opsi_config_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpsiOpsiConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opsi_config_type` <a name="reset_opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetOpsiConfigType"></a>

```python
def reset_opsi_config_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiOpsiConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiOpsiConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiOpsiConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOpsiConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection">opsi_configurations_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput">opsi_config_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType">opsi_config_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filter"></a>

```python
filter: DataOciOpsiOpsiConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList">DataOciOpsiOpsiConfigurationsFilterList</a>

---

##### `opsi_configurations_collection`<sup>Required</sup> <a name="opsi_configurations_collection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigurationsCollection"></a>

```python
opsi_configurations_collection: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpsiOpsiConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `opsi_config_type_input`<sup>Optional</sup> <a name="opsi_config_type_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigTypeInput"></a>

```python
opsi_config_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.opsiConfigType"></a>

```python
opsi_config_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOpsiConfigurationsConfig <a name="DataOciOpsiOpsiConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiOpsiConfigurationsFilter]] = None,
  id: str = None,
  opsi_config_type: typing.List[str] = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType">opsi_config_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#compartment_id DataOciOpsiOpsiConfigurations#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#display_name DataOciOpsiOpsiConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpsiOpsiConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#filter DataOciOpsiOpsiConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#id DataOciOpsiOpsiConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsi_config_type`<sup>Optional</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.opsiConfigType"></a>

```python
opsi_config_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#opsi_config_type DataOciOpsiOpsiConfigurations#opsi_config_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#state DataOciOpsiOpsiConfigurations#state}.

---

### DataOciOpsiOpsiConfigurationsFilter <a name="DataOciOpsiOpsiConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#name DataOciOpsiOpsiConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#values DataOciOpsiOpsiConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_opsi_configurations#regex DataOciOpsiOpsiConfigurations#regex}.

---

### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection()
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems()
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems()
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata()
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails()
```


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOpsiConfigurationsFilterList <a name="DataOciOpsiOpsiConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpsiOpsiConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]]

---


### DataOciOpsiOpsiConfigurationsFilterOutputReference <a name="DataOciOpsiOpsiConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpsiOpsiConfigurationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsFilter">DataOciOpsiOpsiConfigurationsFilter</a>]

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType">config_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails">unit_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails">value_input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `unit_details`<sup>Required</sup> <a name="unit_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.unitDetails"></a>

```python
unit_details: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList</a>

---

##### `value_input_details`<sup>Required</sup> <a name="value_input_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.valueInputDetails"></a>

```python
value_input_details: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadata</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataUnitDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType">allowed_value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue">max_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue">min_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues">possible_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_value_type`<sup>Required</sup> <a name="allowed_value_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.allowedValueType"></a>

```python
allowed_value_type: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.maxValue"></a>

```python
max_value: str
```

- *Type:* str

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.minValue"></a>

```python
min_value: str
```

- *Type:* str

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.possibleValues"></a>

```python
possible_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataValueInputDetails</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts">applicable_contexts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType">config_item_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `applicable_contexts`<sup>Required</sup> <a name="applicable_contexts" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.applicableContexts"></a>

```python
applicable_contexts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_item_type`<sup>Required</sup> <a name="config_item_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.configItemType"></a>

```python
config_item_type: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.metadata"></a>

```python
metadata: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus">config_item_custom_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField">config_item_field</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems">config_items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext">config_items_applicable_context</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField">opsi_config_field</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType">opsi_config_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `config_item_custom_status`<sup>Required</sup> <a name="config_item_custom_status" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemCustomStatus"></a>

```python
config_item_custom_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_item_field`<sup>Required</sup> <a name="config_item_field" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemField"></a>

```python
config_item_field: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_items`<sup>Required</sup> <a name="config_items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItems"></a>

```python
config_items: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsConfigItemsList</a>

---

##### `config_items_applicable_context`<sup>Required</sup> <a name="config_items_applicable_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.configItemsApplicableContext"></a>

```python
config_items_applicable_context: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `opsi_config_field`<sup>Required</sup> <a name="opsi_config_field" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigField"></a>

```python
opsi_config_field: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `opsi_config_type`<sup>Required</sup> <a name="opsi_config_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.opsiConfigType"></a>

```python
opsi_config_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItems</a>

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference <a name="DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_opsi_configurations

dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.items"></a>

```python
items: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOpsiConfigurations.DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection">DataOciOpsiOpsiConfigurationsOpsiConfigurationsCollection</a>

---



