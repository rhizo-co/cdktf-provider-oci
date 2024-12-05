# `dataOciBdsBdsInstanceMetastoreConfigs` Submodule <a name="`dataOciBdsBdsInstanceMetastoreConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceMetastoreConfigs <a name="DataOciBdsBdsInstanceMetastoreConfigs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs oci_bds_bds_instance_metastore_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs(
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
  bds_api_key_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceMetastoreConfigsFilter]] = None,
  id: str = None,
  metastore_id: str = None,
  metastore_type: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreType">metastore_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}.

---

##### `bds_api_key_id`<sup>Optional</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsApiKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#filter DataOciBdsBdsInstanceMetastoreConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}.

---

##### `metastore_type`<sup>Optional</sup> <a name="metastore_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetBdsApiKeyId">reset_bds_api_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreType">reset_metastore_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceMetastoreConfigsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]

---

##### `reset_bds_api_key_id` <a name="reset_bds_api_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetBdsApiKeyId"></a>

```python
def reset_bds_api_key_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_metastore_type` <a name="reset_metastore_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreType"></a>

```python
def reset_metastore_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsBdsInstanceMetastoreConfigs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsBdsInstanceMetastoreConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceMetastoreConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsMetastoreConfigurations">bds_metastore_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList">DataOciBdsBdsInstanceMetastoreConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyIdInput">bds_api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreTypeInput">metastore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreType">metastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bds_metastore_configurations`<sup>Required</sup> <a name="bds_metastore_configurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsMetastoreConfigurations"></a>

```python
bds_metastore_configurations: DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filter"></a>

```python
filter: DataOciBdsBdsInstanceMetastoreConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList">DataOciBdsBdsInstanceMetastoreConfigsFilterList</a>

---

##### `bds_api_key_id_input`<sup>Optional</sup> <a name="bds_api_key_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyIdInput"></a>

```python
bds_api_key_id_input: str
```

- *Type:* str

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceMetastoreConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `metastore_type_input`<sup>Optional</sup> <a name="metastore_type_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreTypeInput"></a>

```python
metastore_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `bds_api_key_id`<sup>Required</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyId"></a>

```python
bds_api_key_id: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `metastore_type`<sup>Required</sup> <a name="metastore_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreType"></a>

```python
metastore_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations()
```


### DataOciBdsBdsInstanceMetastoreConfigsConfig <a name="DataOciBdsBdsInstanceMetastoreConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  bds_api_key_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceMetastoreConfigsFilter]] = None,
  id: str = None,
  metastore_id: str = None,
  metastore_type: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreType">metastore_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}.

---

##### `bds_api_key_id`<sup>Optional</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsApiKeyId"></a>

```python
bds_api_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceMetastoreConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#filter DataOciBdsBdsInstanceMetastoreConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}.

---

##### `metastore_type`<sup>Optional</sup> <a name="metastore_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreType"></a>

```python
metastore_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}.

---

### DataOciBdsBdsInstanceMetastoreConfigsFilter <a name="DataOciBdsBdsInstanceMetastoreConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#name DataOciBdsBdsInstanceMetastoreConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#values DataOciBdsBdsInstanceMetastoreConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#regex DataOciBdsBdsInstanceMetastoreConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#name DataOciBdsBdsInstanceMetastoreConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#values DataOciBdsBdsInstanceMetastoreConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#regex DataOciBdsBdsInstanceMetastoreConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.activateTrigger">activate_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyPassphrase">bds_api_key_passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreType">metastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `activate_trigger`<sup>Required</sup> <a name="activate_trigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.activateTrigger"></a>

```python
activate_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bds_api_key_id`<sup>Required</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyId"></a>

```python
bds_api_key_id: str
```

- *Type:* str

---

##### `bds_api_key_passphrase`<sup>Required</sup> <a name="bds_api_key_passphrase" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyPassphrase"></a>

```python
bds_api_key_passphrase: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `metastore_type`<sup>Required</sup> <a name="metastore_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreType"></a>

```python
metastore_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations</a>

---


### DataOciBdsBdsInstanceMetastoreConfigsFilterList <a name="DataOciBdsBdsInstanceMetastoreConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceMetastoreConfigsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]]

---


### DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference <a name="DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_metastore_configs

dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBdsBdsInstanceMetastoreConfigsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>]

---



