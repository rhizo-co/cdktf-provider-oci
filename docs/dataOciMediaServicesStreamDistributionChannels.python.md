# `dataOciMediaServicesStreamDistributionChannels` Submodule <a name="`dataOciMediaServicesStreamDistributionChannels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamDistributionChannels <a name="DataOciMediaServicesStreamDistributionChannels" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels oci_media_services_stream_distribution_channels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels(
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
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamDistributionChannelsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#filter DataOciMediaServicesStreamDistributionChannels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamDistributionChannelsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesStreamDistributionChannels to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesStreamDistributionChannels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamDistributionChannels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection">stream_distribution_channel_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filter"></a>

```python
filter: DataOciMediaServicesStreamDistributionChannelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList">DataOciMediaServicesStreamDistributionChannelsFilterList</a>

---

##### `stream_distribution_channel_collection`<sup>Required</sup> <a name="stream_distribution_channel_collection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.streamDistributionChannelCollection"></a>

```python
stream_distribution_channel_collection: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamDistributionChannelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannels.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamDistributionChannelsConfig <a name="DataOciMediaServicesStreamDistributionChannelsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamDistributionChannelsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#compartment_id DataOciMediaServicesStreamDistributionChannels#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#display_name DataOciMediaServicesStreamDistributionChannels#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamDistributionChannelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#filter DataOciMediaServicesStreamDistributionChannels#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#id DataOciMediaServicesStreamDistributionChannels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#state DataOciMediaServicesStreamDistributionChannels#state}.

---

### DataOciMediaServicesStreamDistributionChannelsFilter <a name="DataOciMediaServicesStreamDistributionChannelsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#name DataOciMediaServicesStreamDistributionChannels#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#values DataOciMediaServicesStreamDistributionChannels#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channels#regex DataOciMediaServicesStreamDistributionChannels#regex}.

---

### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection()
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems()
```


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamDistributionChannelsFilterList <a name="DataOciMediaServicesStreamDistributionChannelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamDistributionChannelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamDistributionChannelsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]]

---


### DataOciMediaServicesStreamDistributionChannelsFilterOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMediaServicesStreamDistributionChannelsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsFilter">DataOciMediaServicesStreamDistributionChannelsFilter</a>]

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItems</a>

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference <a name="DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_distribution_channels

dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.items"></a>

```python
items: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannels.DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection">DataOciMediaServicesStreamDistributionChannelsStreamDistributionChannelCollection</a>

---



