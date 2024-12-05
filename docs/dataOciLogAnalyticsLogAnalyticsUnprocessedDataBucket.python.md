# `dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket <a name="DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket oci_log_analytics_log_analytics_unprocessed_data_bucket}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_unprocessed_data_bucket

dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#namespace DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#id DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#namespace DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#id DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_unprocessed_data_bucket

dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_unprocessed_data_bucket

dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_unprocessed_data_bucket

dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_unprocessed_data_bucket

dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig <a name="DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_unprocessed_data_bucket

dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  namespace: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#namespace DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#id DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#namespace DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket.DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_unprocessed_data_bucket#id DataOciLogAnalyticsLogAnalyticsUnprocessedDataBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



