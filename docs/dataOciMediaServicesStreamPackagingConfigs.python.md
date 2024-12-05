# `dataOciMediaServicesStreamPackagingConfigs` Submodule <a name="`dataOciMediaServicesStreamPackagingConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamPackagingConfigs <a name="DataOciMediaServicesStreamPackagingConfigs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs oci_media_services_stream_packaging_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution_channel_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamPackagingConfigsFilter]] = None,
  id: str = None,
  state: str = None,
  stream_packaging_config_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.streamPackagingConfigId">stream_packaging_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.distributionChannelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#filter DataOciMediaServicesStreamPackagingConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}.

---

##### `stream_packaging_config_id`<sup>Optional</sup> <a name="stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.Initializer.parameter.streamPackagingConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetStreamPackagingConfigId">reset_stream_packaging_config_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamPackagingConfigsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_stream_packaging_config_id` <a name="reset_stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.resetStreamPackagingConfigId"></a>

```python
def reset_stream_packaging_config_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesStreamPackagingConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesStreamPackagingConfigs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesStreamPackagingConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamPackagingConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList">DataOciMediaServicesStreamPackagingConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigCollection">stream_packaging_config_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelIdInput">distribution_channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigIdInput">stream_packaging_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigId">stream_packaging_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filter"></a>

```python
filter: DataOciMediaServicesStreamPackagingConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList">DataOciMediaServicesStreamPackagingConfigsFilterList</a>

---

##### `stream_packaging_config_collection`<sup>Required</sup> <a name="stream_packaging_config_collection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigCollection"></a>

```python
stream_packaging_config_collection: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `distribution_channel_id_input`<sup>Optional</sup> <a name="distribution_channel_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelIdInput"></a>

```python
distribution_channel_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamPackagingConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `stream_packaging_config_id_input`<sup>Optional</sup> <a name="stream_packaging_config_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigIdInput"></a>

```python
stream_packaging_config_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `stream_packaging_config_id`<sup>Required</sup> <a name="stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.streamPackagingConfigId"></a>

```python
stream_packaging_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamPackagingConfigsConfig <a name="DataOciMediaServicesStreamPackagingConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  distribution_channel_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamPackagingConfigsFilter]] = None,
  id: str = None,
  state: str = None,
  stream_packaging_config_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.streamPackagingConfigId">stream_packaging_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#distribution_channel_id DataOciMediaServicesStreamPackagingConfigs#distribution_channel_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#display_name DataOciMediaServicesStreamPackagingConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamPackagingConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#filter DataOciMediaServicesStreamPackagingConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#id DataOciMediaServicesStreamPackagingConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#state DataOciMediaServicesStreamPackagingConfigs#state}.

---

##### `stream_packaging_config_id`<sup>Optional</sup> <a name="stream_packaging_config_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsConfig.property.streamPackagingConfigId"></a>

```python
stream_packaging_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#stream_packaging_config_id DataOciMediaServicesStreamPackagingConfigs#stream_packaging_config_id}.

---

### DataOciMediaServicesStreamPackagingConfigsFilter <a name="DataOciMediaServicesStreamPackagingConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#name DataOciMediaServicesStreamPackagingConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#values DataOciMediaServicesStreamPackagingConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#regex DataOciMediaServicesStreamPackagingConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#name DataOciMediaServicesStreamPackagingConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#values DataOciMediaServicesStreamPackagingConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_packaging_configs#regex DataOciMediaServicesStreamPackagingConfigs#regex}.

---

### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection()
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems()
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption()
```


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamPackagingConfigsFilterList <a name="DataOciMediaServicesStreamPackagingConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMediaServicesStreamPackagingConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]]

---


### DataOciMediaServicesStreamPackagingConfigsFilterOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMediaServicesStreamPackagingConfigsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsFilter">DataOciMediaServicesStreamPackagingConfigsFilter</a>]

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryption</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocks</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.distributionChannelId">distribution_channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.encryption">encryption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.segmentTimeInSeconds">segment_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.streamPackagingFormat">stream_packaging_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `distribution_channel_id`<sup>Required</sup> <a name="distribution_channel_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.distributionChannelId"></a>

```python
distribution_channel_id: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.encryption"></a>

```python
encryption: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsEncryptionList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsLocksList</a>

---

##### `segment_time_in_seconds`<sup>Required</sup> <a name="segment_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.segmentTimeInSeconds"></a>

```python
segment_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `stream_packaging_format`<sup>Required</sup> <a name="stream_packaging_format" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.streamPackagingFormat"></a>

```python
stream_packaging_format: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItems</a>

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference <a name="DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_stream_packaging_configs

dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.items"></a>

```python
items: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamPackagingConfigs.DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection">DataOciMediaServicesStreamPackagingConfigsStreamPackagingConfigCollection</a>

---



