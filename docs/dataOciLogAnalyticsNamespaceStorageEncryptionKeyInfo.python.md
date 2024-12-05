# `dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule <a name="`dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info oci_log_analytics_namespace_storage_encryption_key_info}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.items"></a>

```python
items: DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#namespace DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_storage_encryption_key_info#id DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference <a name="DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_storage_encryption_key_info

dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource">key_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_source`<sup>Required</sup> <a name="key_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keySource"></a>

```python
key_source: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceStorageEncryptionKeyInfo.DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems">DataOciLogAnalyticsNamespaceStorageEncryptionKeyInfoItems</a>

---



